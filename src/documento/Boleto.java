package documento;

public class Boleto implements Documento{


    @Override
    public void gerarDoc() {
        System.out.println("Boleto gerado com sucesso!!!");
    }
}
