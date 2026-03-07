import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import blog1img from "../assets/images/blog 1.jpg";
import blog2img from "../assets/images/blog 2.jpg";
import blog3img from "../assets/images/blog 3.jpg";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const Blogs = () => {
  // Yeh data ab Home page se match karega
  const allPosts = [
    {
      id: 1,
      date: "15 Oct",
      category: "Engineering",
      title: "How to manage large scale projects efficiently",
      desc: "Learn the best practices and tools our team uses to keep every construction project on schedule.",
      img: blog1img,
    },
    {
      id: 2,
      date: "12 Oct",
      category: "Sustainability",
      title: "The future of green buildings in modern cities",
      desc: "Sustainable architecture is no longer an option but a necessity. Explore our latest eco-friendly materials.",
      img: blog2img,
    },
    {
      id: 3,
      date: "10 Oct",
      category: "Materials",
      title: "Top 5 durable materials for coastal buildings",
      desc: "Building near the sea requires specialized knowledge. We discuss the best materials to prevent corrosion.",
      img: blog3img,
    },
    {
      id: 4,
      date: "05 Oct",
      category: "Interior",
      title: "Minimalist Trends for Modern Offices",
      desc: "Kaise clean aur efficient design se office productivity badhayi ja sakti hai. Modern work culture ke liye best solutions.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
    },
    {
      id: 5,
      date: "01 Oct",
      category: "Design",
      title: "Top 5 Vastu Tips for Your New Home",
      desc: "Aapke ghar mein positive energy laane ke liye kuch zaroori architectural badlav jo har Indian ghar ke liye zaroori hain.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    },
    {
      id: 6,
      date: "28 Sep",
      category: "Safety",
      title: "Importance of Safety Audits on Site",
      desc: "Aman Kahar Construction mein hum safety standards se kabhi samjhauta nahi karte. Har worker ki suraksha hamari zimmedari hai.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <section className="section-13">
          <div className="hero text-center text-white d-flex align-items-center justify-content-center">
            <div className="container">
              <span className="welcome-text fw-bold">Insights & News</span>
              <h1 className="mt-3 display-4 fw-bold">Our Blogs</h1>
              <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
                Stay updated with the latest trends in construction and
                engineering.
              </p>
            </div>
          </div>
        </section>

        <section className="section-14 py-5 bg-light">
          <div className="container">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              slidesPerGroup={1}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                  );
                },
              }}
              breakpoints={{
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
              }}
              className="blog-swiper"
            >
              {allPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="blog-card h-100 shadow-sm border-0 bg-white rounded-4 overflow-hidden">
                    <div className="blog-img-container position-relative">
                      <img src={post.img} alt={post.title} className="w-100" />
                      <div className="blog-date-badge">{post.date}</div>
                    </div>
                    <div className="blog-body p-4">
                      <span className="category-text text-uppercase fw-bold">
                        {post.category}
                      </span>
                      <h4 className="fw-bold mt-2">{post.title}</h4>
                      <p className="text-muted small">{post.desc}</p>
                      <a href="#" className="read-more-link">
                        Read More →
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
