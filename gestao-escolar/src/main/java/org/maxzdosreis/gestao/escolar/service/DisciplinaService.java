package org.maxzdosreis.gestao.escolar.service;

import java.util.List;
import java.util.Optional;

import org.maxzdosreis.gestao.escolar.model.Disciplina;
import org.maxzdosreis.gestao.escolar.repository.DisciplinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DisciplinaService {
    
    @Autowired
    private DisciplinaRepository disciplinaRepository;

    public List<Disciplina> listarDisciplinas(){
        return disciplinaRepository.findAll();
    }

    public Optional<Disciplina> buscarPorId(Long Id){
        return disciplinaRepository.findById(Id);
    }

    public Disciplina salvar(Disciplina disciplina){
        return disciplinaRepository.save(disciplina);
    }

    public void excluir(Long Id){
        disciplinaRepository.deleteById(Id);
    }
}
