package compromissoapp.dao.codec;

import org.bson.BsonReader;
import org.bson.BsonString;
import org.bson.BsonValue;
import org.bson.BsonWriter;
import org.bson.Document;
import org.bson.codecs.Codec;
import org.bson.codecs.CollectibleCodec;
import org.bson.codecs.DecoderContext;
import org.bson.codecs.EncoderContext;
import org.bson.types.ObjectId;

import compromissoapp.modelo.Usuario;

public class UsuarioCodec implements CollectibleCodec<Usuario> {

	private static final String	ID			= "_id";
	private static final String	NOME		= "nome";
	private static final String	EMAIL		= "email";
	private static final String	LOGIN		= "login";
	private static final String	SENHA		= "senha";
	private static final String	SITUACAO	= "situacao";

	private Codec<Document> codec;

	public UsuarioCodec(Codec<Document> codec) {
		this.codec = codec;
	}

	@Override
	public void encode(BsonWriter writer, Usuario usuario, EncoderContext enconder) {

		String pk = usuario.getPk();
		String nome = usuario.getNome();
		String email = usuario.getEmail();
		String login = usuario.getLogin();
		String senha = usuario.getSenha();
		Boolean situacao = usuario.getSituacao();

		Document document = new Document();

		if (pk == null) {
			document.put(ID, new ObjectId());
		} else {
			document.put(ID, new ObjectId(pk));
		}

		document.put(NOME, nome);
		document.put(EMAIL, email);
		document.put(LOGIN, login);
		document.put(SENHA, senha);
		document.put(SITUACAO, situacao);

		this.codec.encode(writer, document, enconder);
	}

	@Override
	public Class<Usuario> getEncoderClass() {
		return Usuario.class;
	}

	@Override
	public Usuario decode(BsonReader reader, DecoderContext decoder) {

		Document document = this.codec.decode(reader, decoder);

		Usuario usuario = new Usuario();

		usuario.setPk(document.getObjectId(ID).toHexString());
		usuario.setNome(document.getString(NOME));
		usuario.setEmail(document.getString(EMAIL));
		usuario.setLogin(document.getString(LOGIN));
		usuario.setSenha(document.getString(SENHA));
		usuario.setSituacao(document.getBoolean(SITUACAO));

		return usuario;
	}

	@Override
	public boolean documentHasId(Usuario usuario) {
		return usuario.getPk() == null;
	}

	@Override
	public Usuario generateIdIfAbsentFromDocument(Usuario usuario) {
		return usuario;
	}

	@Override
	public BsonValue getDocumentId(Usuario usuario) {
		if (!this.documentHasId(usuario)) {
			throw new IllegalStateException("Esse usuario nao tem ".concat(ID));
		}
		return new BsonString(usuario.getPk());
	}

}