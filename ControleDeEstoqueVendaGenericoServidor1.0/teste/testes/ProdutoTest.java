package testes;

import static org.junit.Assert.*;

import java.util.Date;

import org.junit.Test;

import br.com.controleVendasEstoqueDeProdutos.dao.ProdutoDAO;
import br.com.controleVendasEstoqueDeProdutos.model.Produto;

public class ProdutoTest {

	
	
	@Test
	public void salvar() {
		
		Produto produto = new Produto();
		
		produto.setDescricao("Tomada");
		produto.setDataCadastro(new Date());
		produto.setEstoque(2);
		produto.setValor(1.0f);
		
       ProdutoDAO.salvar(produto);
		
		
	}

}
