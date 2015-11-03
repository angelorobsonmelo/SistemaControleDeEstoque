package br.com.controleVendasEstoqueDeProdutos.dao;

import org.hibernate.Session;

import br.com.controleVendasEstoqueDeProdutos.model.Produto;

public class ProdutoDAO {

	
	private static Session sessao;
	
	
	public static void salvar(Produto produto){
		
		
		sessao.save(produto);
	    
		
	}


	
	
}
