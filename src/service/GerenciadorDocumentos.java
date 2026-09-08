package service;

import factory.BoletoFactory;
import factory.DocumentoFactory;
import factory.NotaFactory;

public class GerenciadorDocumentos {

    public DocumentoFactory obterFactory(Integer tipo) {
        switch (tipo) {
            case 1:
            return new BoletoFactory();

            case 2:
                return new NotaFactory();
            default:
                throw new IllegalArgumentException("Opção inválida!");

        }
    }
}
