export default class Team {
  constructor() {
    this.members = new Set();
  }

  addMembers(...heroes) {
    heroes.forEach((hero) => {
      this.members.add(hero);
    });
  }

  [Symbol.iterator]() {
    const members = Array.from(this.members);
    let current = 0;
    const last = members.length;

    return {
      next() {
        if (current < last) {
          const currentMember = members[current];
          current++;
          return {
            done: false,
            value: currentMember,
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  }
}
