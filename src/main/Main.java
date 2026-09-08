package main;

import documento.Documento;
import factory.BoletoFactory;
import factory.DocumentoFactory;
import factory.NotaFactory;
import service.GerenciadorDocumentos;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Escolha o documento que deseja emitir: ");
        System.out.println("1 - BOLETO");
        System.out.println("2 - Nota Fiscal");

        int opcao = sc.nextInt();

        GerenciadorDocumentos gerenciador = new GerenciadorDocumentos();

        DocumentoFactory factory = gerenciador.obterFactory(opcao);

        Documento doc = factory.criarDocumento();

        doc.gerarDoc();


    }
}
