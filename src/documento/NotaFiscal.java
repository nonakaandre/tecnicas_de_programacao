package documento;

public class NotaFiscal implements Documento{
    @Override
    public void gerarDoc() {
    System.out.println("Nota fiscal gerada com sucesso!!!");
    }
}
