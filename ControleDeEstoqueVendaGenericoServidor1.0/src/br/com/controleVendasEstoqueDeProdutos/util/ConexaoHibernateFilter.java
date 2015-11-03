package br.com.controleVendasEstoqueDeProdutos.util;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.hibernate.SessionFactory;

import br.com.controleVendasEstoqueDeProdutos.HibernateUtil;


public class ConexaoHibernateFilter implements Filter {

	private SessionFactory sf;


	@Override
	public void destroy() {
		

	}

	@Override
	public void doFilter(ServletRequest serveletFilter, ServletResponse serveletResponse,
			FilterChain chain) throws IOException, ServletException {

		try {
			this.sf.getCurrentSession().beginTransaction();
			chain.doFilter(serveletFilter, serveletResponse);
			this.sf.getCurrentSession().getTransaction().commit();
			this.sf.getCurrentSession().close();

		} catch (Throwable e) {

			e.printStackTrace();
            System.out.println("Stack trace:");
            System.out.println(e.getStackTrace());
            System.out.println("Cause:");
            System.out.println(e.getCause());
			try {

				if(this.sf.getCurrentSession().getTransaction().isActive()){

					this.sf.getCurrentSession().getTransaction().rollback();
				}

			} catch (Throwable ex) {

				ex.printStackTrace();
			}
			
			throw new ServletException();
		}


	}

	@Override
	public void init(FilterConfig conf) throws ServletException {
		this.sf = HibernateUtil.getSession();

	}



}
