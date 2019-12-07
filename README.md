# A visual introduction to realistic image synthesis

This is an explainable of Generative Adversarial Networks (GAN). We introduced the concept via story-telling and interactive widgets (and lots of cute :smiley_cat: and :dog:!). Check it out [here](http://wodenimoni.com/image-synthesis-explained/).

# Building and Running 

The project is built using [React](https://reactjs.org/) and [Styled System](https://styled-system.com/). 

* To build the project, make sure you have [Node](https://nodejs.org/) install first. We recommend `v10.15.3` or above.
* Run `npm install` in the root directory of the project.
* Run `npm start` and checkout the page at `http://localhost:3000/`

# What's in the repo

* `src` contains the source files for the project webpage, as well as necessary data and other assets in `src/assets/`.
* `scripts` contains a Python script used for data exploration and cleaning for the publication visualization.

# Future work

* We only used PCA for the final latent space exploration page. Many other methods such as t-SNE exist for dimensionality reduction. It would also be nice to try out a 3D visualization like [Embedding Projector](https://projector.tensorflow.org/).
* Many of the arts are in raster formats, which causes some performance problems. Use more vector arts will probably mitigate this.
* We wanted to go into far more details about the inner-workings of GANs but didn't end up doing as much as we hoped. 
* Currently, all the GAN outputs are cached as image files. We explored porting models like BIGGAN to the web using [TensorFlow.js](https://www.tensorflow.org/js) but weren't able to get it to work well. 

# Authors

* [Wode "Nimo" Ni](https://cs.cmu.edu/~woden) (woden@cs.cmu.edu)
* [Jingya Chen](https://www.jingyachen.net/) (jingyach@andrew.cmu.edu)

This project is a part of the final project for the Data Visualization course at Carnegie Mellon University in Fall 2019, taught by [Adam Perer](http://perer.org/). We had a great time in the class and while doing this project. If you're at CMU, we highly recommend taking the class :wink:.
