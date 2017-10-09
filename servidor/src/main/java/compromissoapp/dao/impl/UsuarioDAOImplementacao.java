package compromissoapp.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;
import org.bson.codecs.Codec;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.types.ObjectId;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientOptions;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

import compromissoapp.dao.UsuarioDAO;
import compromissoapp.dao.codec.UsuarioCodec;
import compromissoapp.modelo.Usuario;

public class UsuarioDAOImplementacao implements UsuarioDAO {

	private static final String	TABELA				= "usuarios";
	private static final String	ID					= "_id";
	private static final String	MODIFICADOR_UPDATE	= "$set";
	private static final String	URL					= "127.0.0.1:27017";
	private static final String	BANCO				= "compromissoapp";

	private MongoClient		mongoClient;
	private MongoDatabase	database;

	@Override
	public Usuario getUsuario(String pk) {
		this.criarConexao();

		MongoCollection<Usuario> collection = this.database.getCollection(TABELA, Usuario.class);
		Usuario usuario = collection.find(Filters.eq(ID, new ObjectId(pk))).first();

		this.fecharConexao();

		return usuario;
	}

	@Override
	public List<Usuario> getUsuarios() {
		this.criarConexao();

		MongoCollection<Usuario> collection = this.database.getCollection(TABELA, Usuario.class);
		MongoCursor<Usuario> mongoCursor = collection.find(Usuario.class).iterator();

		List<Usuario> listaUsuarios = this.popularListaUsuario(mongoCursor);

		this.fecharConexao();

		return listaUsuarios;
	}

	@Override
	public Usuario salvar(Usuario usuario) {
		this.criarConexao();

		MongoCollection<Usuario> collection = this.database.getCollection(TABELA, Usuario.class);
		collection.insertOne(usuario);
		this.fecharConexao();

		return usuario;
	}

	@Override
	public Usuario atualizar(String pk, Usuario usuario) {

		this.criarConexao();

		MongoCollection<Usuario> colecaoUsuarios = this.database.getCollection(TABELA, Usuario.class);
		colecaoUsuarios.updateOne(Filters.eq(ID, new ObjectId(pk)), new Document(MODIFICADOR_UPDATE, usuario));
		this.fecharConexao();

		return usuario;
	}

	@Override
	public void excluir(String pk) {

		this.criarConexao();

		MongoCollection<Usuario> colecaoUsuarios = this.database.getCollection(TABELA, Usuario.class);
		colecaoUsuarios.deleteOne(Filters.eq(ID, new ObjectId(pk)));

		this.fecharConexao();
	}

	private void criarConexao() {
		Codec<Document> codec = MongoClient.getDefaultCodecRegistry().get(Document.class);

		UsuarioCodec usuarioCodec = new UsuarioCodec(codec);

		CodecRegistry codecRegistry = CodecRegistries.fromRegistries(MongoClient.getDefaultCodecRegistry(),
				CodecRegistries.fromCodecs(usuarioCodec));

		MongoClientOptions clientOptions = MongoClientOptions.builder().codecRegistry(codecRegistry).build();

		this.mongoClient = new MongoClient(URL, clientOptions);
		this.database = mongoClient.getDatabase(BANCO);
	}

	private List<Usuario> popularListaUsuario(MongoCursor<Usuario> resultado) {
		List<Usuario> listaUsuarios = new ArrayList<>();

		while (resultado.hasNext()) {
			listaUsuarios.add(resultado.next());
		}
		return listaUsuarios;
	}

	private void fecharConexao() {
		this.mongoClient.close();
	}

}