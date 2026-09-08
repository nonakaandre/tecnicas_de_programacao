package factory;

import documento.Documento;
import documento.NotaFiscal;

public class NotaFactory extends DocumentoFactory{
    @Override
    public Documento criarDocumento() {
        return new NotaFiscal();
    }
}
