/**
 *@author     黄佳
 *@date       2019/12/12  17:46
 *@Copyright 天源迪科信息技术股份有限公司
 *@Description
 */
import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import { cube } from './math.js';

     if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }
function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());


// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//     btn.innerHTML = '点击这里，然后查看 console！';
//     btn.onclick = printMe;
//
//     element.appendChild(btn);
//     return element;
// }
//
// // document.body.appendChild(component());
//     let element = component(); // 存储 element，以在 print.js 修改时重新渲染
//     document.body.appendChild(element);


if (module.hot) {
   module.hot.accept('./print.js', function() {
         console.log('Accepting the updated printMe module!');
         // printMe();
       document.body.removeChild(element);
       element = component(); // Re-render the "component" to update the click handler
       document.body.appendChild(element);

       })
 }
