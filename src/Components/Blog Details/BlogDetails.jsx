import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BlogDetailData } from '../../API/BlogDetailData'

const categoryQuotes = {
  Education: {
    text: "Education is one of the most powerful aspects of life. Education and learning allow us to make sense of the world around us, the world inside of us, and where we fit within the world.",
    author: "Rosalina D. Jackson",
    color: "#2fdab8"
  },
  "Art & Design": {
    text: "Art enables us to find ourselves and lose ourselves at the same time.",
    author: "Thomas Merton",
    color: "#8A47CB"
  },
  Technology: {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
    color: "#ffb400"
  },
  Leadership: {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
    color: "#f25767"
  },
  Marketing: {
    text: "Marketing is no longer about the stuff you make, but about the stories you tell.",
    author: "Seth Godin",
    color: "#00bcd4"
  },
  // Add more categories as needed
  Default: {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
    color: "#8A47CB"
  }
};

const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    comment: ''
  })
  const [comments, setComments] = useState([])
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [showShareMenu, setShowShareMenu] = useState(false)

  // Find the current post and related posts
  useEffect(() => {
    if (!id) {
      navigate('/blog')
      return
    }

    const currentPost = BlogDetailData.find(p => p.id === parseInt(id))
    if (!currentPost) {
      navigate('/404')
      return
    }
    setPost(currentPost)

    // Get related posts (any category, excluding current post)
    const related = BlogDetailData
      .filter(p => p.id !== currentPost.id)
      .slice(0, 5)
    setRelatedPosts(related)
  }, [id, navigate])

  // Handle comment form submission
  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (!commentForm.name || !commentForm.email || !commentForm.comment) {
      alert('Please fill in all fields')
      return
    }

    const newComment = {
      id: Date.now(),
      author: commentForm.name,
      email: commentForm.email,
      content: commentForm.comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    setComments([...comments, newComment])
    setCommentForm({ name: '', email: '', comment: '' })
  }

  // Handle comment form input changes
  const handleCommentChange = (e) => {
    const { name, value } = e.target
    setCommentForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchTerm)}`)
    }
  }

  // Handle social sharing
  const handleShare = (platform) => {
    const url = window.location.href
    const title = post?.title

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank')
        break
      default:
        break
    }
    setShowShareMenu(false)
  }

  if (!post) return null

  const quote = categoryQuotes[post.category] || categoryQuotes.Default;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
      {/* Header Section */}
      <div className="relative bg-[#FFF7FA] pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-18 overflow-hidden rounded-xl mb-12">
        <div className="relative z-20 text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            {post.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700 font-medium">
            <Link to="/" className="hover:text-[#8A47CB] font-semibold">
              Home
            </Link>
            <span className="text-[#8A47CB] font-semibold"> – Blog Details </span>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="w-[150%] h-[100%] bg-gradient-to-b from-[#F8F8F8] to-transparent rounded-full absolute top-[-75%] left-[-25%]" />
        </div>
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages5.svg"
          alt="Arrow Decoration"
          className="absolute top-6 left-4 sm:top-10 sm:left-10 w-10 sm:w-14 md:w-16 z-10"
        />
        <img
          src="https://demo.themeies.com/edugen/wp-content/uploads/2024/09/pages4.svg"
          alt="Book Decoration"
          className="absolute top-6 right-4 sm:top-10 sm:right-10 w-10 sm:w-14 md:w-16 z-10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Featured Image */}
          <div className="relative rounded-xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-[#8A47CB] text-white text-xs font-bold px-3 py-1.5 rounded-md">
              {post.category}
            </span>
          </div>

          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#8A47CB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#8A47CB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>{comments.length + post.comments} Comments</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold text-[#8A47CB] mb-4">{post.title}</h2>
            <p className="text-gray-600 leading-relaxed">{post.content}</p>
          </div>

          {/* Category-based Quote Block */}
          {quote && (
            <div
              className="rounded-lg p-6 my-8 shadow-md relative"
              style={{ backgroundColor: quote.color, color: "#fff" }}
            >
              <svg className="absolute top-4 left-4 w-8 h-8 opacity-20" fill="white" viewBox="0 0 24 24">
                <path d="M7.17 6A5.001 5.001 0 002 11v1a3 3 0 003 3h2a1 1 0 001-1v-1a1 1 0 00-1-1H5v-1a3 3 0 013-3h.17zM17.17 6A5.001 5.001 0 0012 11v1a3 3 0 003 3h2a1 1 0 001-1v-1a1 1 0 00-1-1h-1v-1a3 3 0 013-3h.17z" />
              </svg>
              <div className="pl-12">
                <p className="text-lg font-semibold italic">&ldquo;{quote.text}&rdquo;</p>
                <div className="mt-4 font-bold">&ndash; {quote.author}</div>
              </div>
            </div>
          )}

          {/* Tags and Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-white text-gray-700 text-sm rounded-md hover:bg-[#8A47CB] hover:text-white transition-colors cursor-pointer"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-[#8A47CB] text-white rounded-md hover:bg-[#7a3db8] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <svg className="h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold mb-1">{post.author.name}</h3>
                <p className="text-gray-600 text-sm">
                  Author and content creator with expertise in {post.category.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Comments ({comments.length + post.comments})</h3>

            {/* Existing Comments */}
            {comments.length > 0 && (
              <div className="space-y-6 mb-8">
                {comments.map(comment => (
                  <div key={comment.id} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#8A47CB] text-white flex items-center justify-center font-bold">
                        {comment.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{comment.author}</h4>
                        <p className="text-sm text-gray-500">{comment.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Comment form */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">Leave a Comment</h4>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div>
                  <textarea
                    name="comment"
                    value={commentForm.comment}
                    onChange={handleCommentChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                    rows="4"
                    placeholder="Your comment"
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={commentForm.name}
                    onChange={handleCommentChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={commentForm.email}
                    onChange={handleCommentChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                    placeholder="Your email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#8A47CB] text-white px-6 py-3 rounded-lg hover:bg-[#7a3db8] transition-colors"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Search</h3>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8A47CB] focus:ring-1 focus:ring-[#8A47CB] outline-none"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#8A47CB]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Related Posts Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Related Posts</h3>
            <div className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="flex gap-3">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="font-medium text-sm hover:text-[#8A47CB] transition-colors line-clamp-2">
                      <Link to={`/blog-details/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">{relatedPost.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {Array.from(new Set(BlogDetailData.map(post => post.category))).map((category, index) => (
                <li key={index} className="flex justify-between items-center">
                  <Link
                    to={`/blog?category=${encodeURIComponent(category)}`}
                    className="text-gray-600 hover:text-[#8A47CB] transition-colors"
                  >
                    {category}
                  </Link>
                  <span className="text-gray-500 text-sm bg-gray-100 px-2 py-0.5 rounded-full">
                    {BlogDetailData.filter(post => post.category === category).length}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Widget */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(BlogDetailData.flatMap(post => post.tags))).map((tag, index) => (
                <Link
                  key={index}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-[#8A47CB] hover:text-white transition-colors cursor-pointer"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails














