import Team from './Team.js';

const Hero1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const Hero2 = {
  name: 'Мечник',
  type: 'Swordsman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const newTeam = new Team();
newTeam.addMembers(Hero1, Hero2);

for (const hero of newTeam) {
  console.log(hero);
}
