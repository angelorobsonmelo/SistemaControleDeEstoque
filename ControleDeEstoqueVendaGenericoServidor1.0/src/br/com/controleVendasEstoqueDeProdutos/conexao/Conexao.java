package br.com.controleVendasEstoqueDeProdutos.conexao;

import org.hibernate.Session;

import br.com.controleVendasEstoqueDeProdutos.HibernateUtil;



public class Conexao {

	
	public static void main(String[] args) {
		Session sessao = null;
		
		try {
			
			sessao = HibernateUtil.getSession().openSession();
			System.out.println("Deu certo!");
			
		} finally {
			
			sessao.close();
			System.out.println("fechou a conexão");
		}
	}
}
