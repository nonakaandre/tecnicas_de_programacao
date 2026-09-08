package factory;

import documento.Boleto;
import documento.Documento;

import javax.print.Doc;

public class BoletoFactory extends DocumentoFactory {
    @Override
    public Documento criarDocumento() {
        return new Boleto();
    }
}
