function mostrarSecao(secaoId) {
    // Ocultar todas as seções
    const secoes = document.querySelectorAll('main > section');
    secoes.forEach(secao => {
        secao.style.display = 'none';
    });

    // Mostrar a seção selecionada
    const secaoSelecionada = document.getElementById(secaoId);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = 'block';

        // Centralizar o formulário dentro da seção selecionada
        const formulario = secaoSelecionada.querySelector('form');
        if (formulario) {
            formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function atualizarLista(listaElemento, dados) {
    listaElemento.innerHTML = dados.map(item => `<li>${JSON.stringify(item)}</li>`).join('');
}

function salvarDados(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}
    

document.addEventListener('DOMContentLoaded', () => {
    mostrarSecao('alunos');

    const formAlunos = document.getElementById('formAlunos');
    const listaAlunos = document.getElementById('listaAlunos');
    const alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    formAlunos.onsubmit = function (e) {
        e.preventDefault();
        const nome = document.getElementById('nomeAluno').value;
        const dataNascimento = document.getElementById('dataNascimentoAluno').value;
        const endereco = document.getElementById('enderecoAluno').value;
        const telefone = document.getElementById('telefoneAluno').value;
        const email = document.getElementById('emailAluno').value;
        const turma = document.getElementById('turmaAluno').value;
        alunos.push({ nome, dataNascimento, endereco, telefone, email, turma});
        salvarDados('alunos', alunos);
        atualizarLista(listaAlunos, alunos);
        formAlunos.reset();
    };
    atualizarLista(listaAlunos, alunos);
});

document.addEventListener('DOMContentLoaded', () => {
    mostrarSecao('professores');
    
    const formProfessores = document.getElementById('formProfessores');
    const listaProfessores = document.getElementById('listaProfessores');
    const professores = JSON.parse(localStorage.getItem('professores')) || [];
  
    formProfessores.onsubmit = function (e) {
        e.preventDefault();
        const nome = document.getElementById('nomeProfessor').value;
        const disciplina = document.getElementById('disciplinaProfessor').value;
        const cpf = document.getElementById('cpfProfessor').value;
        const email = document.getElementById('emailProfessor').value;
        const telefone = document.getElementById('telefoneProfessor').value;
        professores.push({ nome, disciplina, cpf, email, telefone});
        salvarDados('professores', professores);
        atualizarLista(listaProfessores, professores);
        formProfessores.reset;
    };
    atualizarLista(listaProfessores, professores);
});

document.addEventListener('DOMContentLoaded', () => {
   mostrarSecao('turmas');
   
   const formTurmas = document.getElementById('formTurmas');
   const listaTurmas = document.getElementById('listaTurmas');
   const turmas = JSON.parse(localStorage.getItem('turmas')) || [];
    
    formTurmas.onsubmit = function (e) {
      e.preventDefault();
      const numero = document.getElementById('numeroTurma').value;
      const turno = document.getElementById('turnoTurma').value;
      const vagas = document.getElementById('vagasTurma').value;
      turmas.push({ numero, turno, vagas});
      salvarDados('turmas', turmas);
      atualizarLista(listaTurmas, turmas);
      formTurmas.reset;
    };
    atualizarLista(listaTurmas, turmas);
});

document.addEventListener('DOMContentLoaded', () => {
   mostrarSecao('disciplinas');
   
   const formDisciplinas = document.getElementById('formDisciplinas');
   const listaDisciplinas = document.getElementById('listaDisciplinas');
   const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
   
   formDisciplinas.onsubmit = function (e) {
     e.preventDefault();
     const nome = document.getElementById('nomeCurso').value;
     const carga = document.getElementById('cargaCurso').value;
     disciplinas.push({ nome, carga});
     salvarDados('disciplinas', disciplinas);
     atualizarLista(listaDisciplinas, disciplinas);
     formDisciplinas.reset;
   };
    atualizarLista(listaDisciplinas, disciplinas);
});
