let alunos = [
    {
        nome: 'Aluno1',
        nota: 8
    },
    {
        nome: 'Aluno2',
        nota: 5
    },
    {
        nome: 'Aluno3',
        nota: 6
    },
    {
        nome: 'Aluno4',
        nota: 9
    },
    {
        nome: 'Aluno5',
        nota: 4
    },
    {
        nome: 'Aluno6',
        nota: 10
    }
]

const alunosAprovados = alunos.filter(function(item){
    return item.nota >= 6
})

console.log(alunosAprovados)
