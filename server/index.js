// server/index.js
const express = require('express');
const slugify = require('slugify');
const app = express();
const PORT = 3001;

app.use(express.json());

const blogPosts = [
    {
        id: 1,
        thumbnail: 'https://www.byperth.com/wp-content/uploads/2018/04/stock-analyzer-project-architecture-1.jpg',
        title: "The Benefits of Building an Application: Why It’s Worth the Investment",
        content: "In today's digital world, building an application can be a game-changer for businesses, individuals, and organizations alike. Whether you're a startup founder, a seasoned entrepreneur, or simply passionate about technology, creating an app offers numerous advantages. Here’s a look at some of the key benefits:",
        video: 'https://www.youtube.com/embed/BfhSoFARn6w?si=JooHTOVjHXnl017-',
        dateCreated: new Date(),
        slug: slugify('The Benefits of Building an Application: Why It’s Worth the Investment', {lower:true})
    },
    {
        id: 2,
        thumbnail: 'https://bigdataanalyticsnews.com/wp-content/uploads/2020/07/low-code-paltforms.png',
        title: "Getting Started with [Programming Language/Framework]",
        content: "An in-depth look at React Hooks and how they can simplify your code.",
        video: 'https://www.youtube.com/embed/BfhSoFARn6w?si=JooHTOVjHXnl017-',
        dateCreated: new Date(),
        slug: slugify('Getting Started with [Programming Language/Framework]', {lower:true})
    },
    {
        id: 3,
        thumbnail: 'https://imageio.forbes.com/specials-images/imageserve/636c1430f67770888c7fde53/Cash-dollars-and-stock-market-indicators/960x0.jpg?format=jpg&width=1440',
        title: "Getting Started with [Programming Language/Framework]",
        content: "An in-depth look at React Hooks and how they can simplify your code.",
        video: 'https://www.youtube.com/embed/BfhSoFARn6w?si=JooHTOVjHXnl017-',
        dateCreated: new Date(),
        slug: slugify('Getting Started with [Programming Language/Framework]', {lower:true})
    },
    {
        id: 4,
        thumbnail: 'https://imageio.forbes.com/specials-images/imageserve/636c1430f67770888c7fde53/Cash-dollars-and-stock-market-indicators/960x0.jpg?format=jpg&width=1440',
        title: "Getting Started with [Programming Language/Framework]",
        content: "An in-depth look at React Hooks and how they can simplify your code.",
        video: 'https://www.youtube.com/embed/BfhSoFARn6w?si=JooHTOVjHXnl017-',
        dateCreated: new Date(),
        slug: slugify('Getting Started with [Programming Language/Framework]', {lower:true})
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
