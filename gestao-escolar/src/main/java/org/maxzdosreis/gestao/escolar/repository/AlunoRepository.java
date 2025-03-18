package org.maxzdosreis.gestao.escolar.repository;

import org.maxzdosreis.gestao.escolar.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{
    
}
