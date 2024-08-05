// server/index.js
const express = require('express');
const slugify = require('slugify');
const app = express();
const PORT = 3001;

app.use(express.json());

const path = require('path');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

const blogPosts = [
    {
        id: 1,
        thumbnail: 'https://www.byperth.com/wp-content/uploads/2018/04/stock-analyzer-project-architecture-1.jpg',
        title: "The Benefits of Building an Application: Why It’s Worth the Investment",
        content: "In today's digital world, building an application can be a game-changer for businesses, individuals, and organizations alike. Whether you're a startup founder, a seasoned entrepreneur, or simply passionate about technology, creating an app offers numerous advantages. Here’s a look at some of the key benefits:",
        video: 'https://www.youtube.com/embed/LxcmF_Kk0Ho?si=smJIKxfwdkTYNwLN',
        dateCreated: new Date(),
        slug: slugify('The Benefits of Building an Application: Why It’s Worth the Investment', {lower:true})
    },
    {
        id: 2,
        thumbnail: 'https://www.byperth.com/wp-content/uploads/2018/04/stock-analyzer-project-architecture-1.jpg',
        title: "The Benefits of Building an Application: Why It’s Worth the Investment",
        content: "In today's digital world, building an application can be a game-changer for businesses, individuals, and organizations alike. Whether you're a startup founder, a seasoned entrepreneur, or simply passionate about technology, creating an app offers numerous advantages. Here’s a look at some of the key benefits:",
        video: 'https://www.youtube.com/embed/LxcmF_Kk0Ho?si=smJIKxfwdkTYNwLN',
        dateCreated: new Date(),
        slug: slugify('The Benefits of Building an Application: Why It’s Worth the Investment', {lower:true})
    },
];

app.get('/api/posts', (req, res) => {
    const previews = blogPosts.map(post => (
        { 
            id: post.id, 
            thumbnail: post.thumbnail, 
            title: post.title, 
            content: post.content,  
            video: post.video, 
            dateCreated: post.dateCreated, 
            slug: post.slug,
        }
    )
    );
    res.json(previews);
});

app.get('/api/posts/:slug', (req, res) => {
    const postSlug = req.params.slug;
    const post = blogPosts.find(p => p.slug === postSlug);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
