package org.maxzdosreis.gestao.escolar.repository;

import org.maxzdosreis.gestao.escolar.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Long>{
    
}
