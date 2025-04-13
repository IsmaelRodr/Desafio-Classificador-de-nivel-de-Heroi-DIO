// Desafio Classificador de nível de Herói

const nomeDoHeroi = 'Link';
let xpDoHeroi = 1000;
let rankDoHeroi;

switch (true) {
    case xpDoHeroi <= 1000:
        rankDoHeroi = 'Ferro';
        break;
    case xpDoHeroi > 1000 && xpDoHeroi <= 2000:
        rankDoHeroi = 'Bronze';
        break;
    case xpDoHeroi > 2000 && xpDoHeroi <= 5000:
        rankDoHeroi = 'Prata';
        break;
    case xpDoHeroi > 5000 && xpDoHeroi <= 7000:
        rankDoHeroi = 'Ouro';
        break;
    case xpDoHeroi > 7000 && xpDoHeroi <= 8000:
        rankDoHeroi = 'Platina';
        break;
    case xpDoHeroi > 8000 && xpDoHeroi <= 9000:
        rankDoHeroi = 'Ascendente';
        break;
    case xpDoHeroi > 9000 && xpDoHeroi <= 10000:
        rankDoHeroi = 'Imortal';
        break;
    case xpDoHeroi > 10000:
        rankDoHeroi = 'Radiante';
        break;
    default:
        rankDoHeroi = 'Desconhecido';
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${rankDoHeroi}!`);
