const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.listen(process.env.PORT || 3000, ()=> {
    console.log('app listening')
});

app.use(express.static('./public'));

const errorHandler = (error, req, res, next) => {
    if (error) {
        res.render('404');
        console.log(error)
    }
}

// ROUTES
app.get('/', (req, res) => {
    res.status(200).render('home', {title: "Home"});
});

app.get('/library', (req, res) => {
    res.status(200).render('library', {title: "Library"})
})

app.get('/blog', (req, res) => {
    res.status(200).render('blog', {title: "Blog"})
})
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
  });


//   ERROR HANDLER MIDDLEWARE
app.use(errorHandler)

