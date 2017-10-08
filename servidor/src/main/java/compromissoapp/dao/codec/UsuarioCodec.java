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
			document.put("_id", new ObjectId());
		} else {
			document.put("_id", new ObjectId(pk));
		}

		document.put("nome", nome);
		document.put("email", email);
		document.put("login", login);
		document.put("senha", senha);
		document.put("situacao", situacao);

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

		usuario.setPk(document.getObjectId("_id").toHexString());
		usuario.setNome(document.getString("nome"));
		usuario.setEmail(document.getString("email"));
		usuario.setLogin(document.getString("login"));
		usuario.setSenha(document.getString("senha"));
		usuario.setSituacao(document.getBoolean("situacao"));

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
			throw new IllegalStateException("Esse usuario nao tem _id");
		}
		return new BsonString(usuario.getPk());
	}

}