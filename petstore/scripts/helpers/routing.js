import { productsController } from 'products-controller';
import { homeController } from 'home-controller';

let router = (() => {
    let router;

    function init() {
        router = new Navigo(null, false);

        router.on('/dogsBreed', () => {
            // TODO: change href attributes in a tags to existing routs  example href"#/home"
            //Promise.all(([data, template]), tl.get('allDogFood'))
            // 1 get data()
            // 2 .then(load content)

            console.log('e vi go');

        });

        router.on('/home', (template) => {
            homeController.loadHome();
        });

        router.on('/cat-food-list/:filter', (params, query) => {
            console.log('called with filter');
            console.log(params);
            productsController.loadCatFood();
        });


        router.on('/cat-food-list', () => {
            console.log('called without parameters');
            productsController.loadCatFood();
        });

        router.notFound(() => {
            router.navigate('/home');
        });

        router.resolve();
    }

    return {
        init
    }
})();

export { router }