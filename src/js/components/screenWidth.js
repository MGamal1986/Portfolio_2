export default function ScreenWidth() {
    // let p1 = new Promise((res, rej) => {
    //     window.addEventListener('load', (event) => {
    //         res(window.innerWidth);
    //     })
    // })

    // p1.then((res) => {
    //     console.log(res);
    //     return res;
    // })
    return new Promise((res, rej) => {
        window.addEventListener('resize', (event) => {
            res(window.innerWidth);
        })
    })

}

// export default class ScreenWidth {
//     constructor() {
//         this.size = 0;
//     }
//     width() {
//         window.addEventListener('load', (event) => {
//             this.size = window.innerWidth;
//         })
//         return this.size;
//     }
// }