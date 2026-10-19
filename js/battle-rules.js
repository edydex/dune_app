(function(root) {
  const kh = ({faction,regular=0,elite=0,bonus=0,versusFremen=false,karama=false}) => {
    regular = Math.max(0, Math.floor(Number(regular)||0)); elite = Math.max(0, Math.floor(Number(elite)||0));
    const dial = regular + elite * (faction === 'emperor' && versusFremen ? 1 : 2);
    const maxBonus = dial >= 8 ? 3 : dial >= 4 ? 2 : dial >= 2 ? 1 : 0;
    bonus = Math.min(maxBonus, Math.max(0, Math.floor(Number(bonus)||0)));
    return {dial,maxBonus,bonus,strength:dial+bonus,cost:faction === 'fremen' && !karama ? 0 : [0,2,4,8][bonus]};
  };
  root.DuneBattle = {kh};
  if (typeof module !== 'undefined') module.exports = root.DuneBattle;
})(typeof window !== 'undefined' ? window : globalThis);
