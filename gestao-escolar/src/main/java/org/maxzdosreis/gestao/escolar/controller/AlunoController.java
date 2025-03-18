package org.maxzdosreis.gestao.escolar.controller;

import java.util.List;
import java.util.Optional;

import org.maxzdosreis.gestao.escolar.model.Aluno;
import org.maxzdosreis.gestao.escolar.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/alunos")
public class AlunoController {
    
    @Autowired
    private AlunoService alunoService;

    @GetMapping
    public List<Aluno> listarAlunos(){
        return alunoService.listarAlunos();
    }

    @GetMapping("/{id}")
    public Optional<Aluno> buscarPorId(@PathVariable Long id) {
        return alunoService.buscarPorId(id);
    }

    @PostMapping
    public Aluno salvar(@RequestBody Aluno aluno) {
        return alunoService.salvar(aluno);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        alunoService.excluir(id);
    }
}
