export const register = () => {
  Cypress.Commands.add(
    'sign',
    {
      prevSubject: true,
    },
    (subject, moves) => {
      const defaultMovements = [
        { x: 10, y: 10 },
        { x: 100, y: 100 },
        { x: 100, y: 200 },
        { x: 200, y: 200 },
      ];
      const input = cy.get(subject.selector);
      cy.get(subject.selector).then((canvas) => {
        const movements = moves || defaultMovements;
        const ctx = canvas[0].getContext('2d');
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';

        ctx.beginPath();
        ctx.moveTo(movements[0].x, movements[0].y);
        for (const movement of movements) {
          ctx.lineTo(movement.x, movement.y);
        }
        ctx.stroke();
      });

      return input.click();
    },
  );
};

register();
