import React from 'react'

const Category = ({loading, error, categories}) => {
  return (
    <section className="categories" id="categories">
  <div className="container">
    <div className="section-head">
      <h2>Pick a category</h2>
      <span className="count" id="category-count">
        {
            categories && categories.length > 0 && <span className='badge bg-primary'>{categories.length} Categeries</span>
        }
      </span>
    </div>
    <div className="row" id="category-grid">
        {
            loading && <p>Loading Categories......</p>
        }

        {
            !loading &&  categories.length > 0 && categories.map(function(cat, index){
                return (
                            <div className="col-12 col-sm-6 col-lg-4 card-col" key={index}>
                                <article className="recipe-card">
                                    <span className="pin" aria-hidden="true" />
                                    <div className="recipe-thumb-wrap">
                                        <img
                                        className="recipe-thumb"
                                        src={cat.strCategoryThumb}
                                        alt="Beef"
                                        loading="lazy"
                                        />
                                    </div>
                                    <div className="recipe-body">
                                        <div className="recipe-id">CAT. {cat.idCategory}</div>
                                        <h3 className="recipe-title">{cat.strCategory}</h3>
                                        <p className="recipe-desc">
                                        Beef is the culinary name for meat from cattle, prized for its
                                        high-quality protein and essential nutrients.
                                        </p>
                                        <a href="#" className="recipe-link" data-category="Beef">
                                        View recipes <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </article>
                            </div>
                )
            })
        }
    </div>
  </div>
</section>

  )
}

export default Category