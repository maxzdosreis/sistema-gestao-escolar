package org.maxzdosreis.gestao.escolar.service;

import java.util.List;
import java.util.Optional;

import org.maxzdosreis.gestao.escolar.model.Turma;
import org.maxzdosreis.gestao.escolar.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TurmaService {
    
    @Autowired
    private TurmaRepository turmaRepository;

    public List<Turma> listarTurmas(){
        return turmaRepository.findAll();
    }

    public Optional<Turma> buscarPorId(Long id){
        return turmaRepository.findById(id);
    }

    public Turma salvar(Turma turma){
        return turmaRepository.save(turma);
    }

    public void deletar(Long id){
        turmaRepository.deleteById(id);
    }
}
