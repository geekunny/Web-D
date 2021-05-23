import styler from 'stylefire';
import { spring } from 'popmotion';
import { listen } from 'popmotion';
import { pointer } from 'popmotion';
import { value } from 'popmotion';

const ball = document.querySelector('.box');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(ballXY.get()).start(ballXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            // mass: 1,
            // damping: 10
        }).start(ballXY);
    });