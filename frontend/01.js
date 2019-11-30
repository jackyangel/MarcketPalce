        //Paginas
        const Home = {
            template: '<h2>HOME PAGE</h2>'
        }
        const About = {
            template: '<h2>ABOUT US</h2>'
        }
        const Registrar = {
                template: `
                <div style="width:60%; margin: 0 auto">
            <h3>Registrar Producto</h3>
            <div class="border rounded shadow-none p-3 mb-5 bg-light">
                <form style="width:70%; margin:0 auto">
                    &nbsp;
                    <div class="form-group">
                        <label for="nombreProducto">Nombre</label>
                        <input class="form-control" id="nombreProducto">
                    </div>
                    <div class="form-group">
                        <label for="categoria">Categoria</label>
                        <select class="form-control" id="categoria">
                        <option>Hogar</option>
                        <option>Deportes</option>
                        <option>Tecnologia</option>
                        </select>
                    </div>
                    <div class="form-group">
                            <div class="row">
                                <div class="col">
                                    <label for="precio">Precio</label>
                                    <input class="form-control" id="precio">
                                </div>
                                <div class="col">
                                    <label for="uniPeso"></label>
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>usd</option>
                                        <option value="1">cops</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <label for="tamaño">Tamaño</label>
                                <input class="form-control" id="nombreProducto">
                            </div>
                            <div class="col">
                                <label></label>
                                <select class="custom-select my-1 mr-sm-2" id="uniTam">
                                    <option selected>cm</option>
                                    <option>inch</option>
                                </select>
                            </div>
                        </div>
                    </div>                
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <label for="peso">Peso</label>
                                <input class="form-control" id="peso">
                            </div>
                            <div class="col">
                                <label></label>
                                <select class="custom-select my-1 mr-sm-2" id="uniPeso">
                                    <option selected>kg</option>
                                    <option>Lb</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Descripcion">Descripcion</label>
                        <textarea class="form-control" id="descripcion" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                            <label for="img">Agregar imagen</label>
                            <input type="file" class="form-control-file" id="img">
                            </div>
                    <button type="submit" class="btn btn-primary my-1">Guardar</button>
                </form>
            </div>
        </div>  
                `
            }
            //Rutas
        const routes = [{
                path: '/',
                component: Home
            }, {
                path: '/acerca-de',
                component: About
            }, {
                path: '/Registrar',
                component: Registrar
            },

        ]
        const router = new VueRouter({
                routes
            })
            //proyecto VUE
        new Vue({
            router,
            el: '#app'
        })