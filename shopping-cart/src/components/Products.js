import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { formatPrice } from '../utils/index.js';

const baseURL = 'http://localhost:3003';
const noNetworkError =
  'Please run the server from the /server with the next command "npm run products"';

const ContentBuild = ({ htmlContent }) => {
  const [isHovering, setIsHovering] = useState({});
  const dispatch = useDispatch();

  const onProductDesctiptionHide = (e, index) => {
    setIsHovering((c) => {
      return {
        ...c,
        [index]: false,
      };
    });
  };

  const onProductDesctiptionShow = (e, index) => {
    setIsHovering((c) => {
      return {
        ...c,
        [index]: true,
      };
    });
  };

  const onAddToCart = (cartItem) => {
    const { id, title, price } = cartItem;
    dispatch(addToCart({ id, title, price }));
  };

  return (
    <>
      {htmlContent.map((element, index) => {
        return (
          <div className='productItem' key={element.id}>
            <div className='product-image-box'>
              <img
                className='product-image'
                src={element.img}
                alt={element.title}
              />
            </div>
            <div className='product-context'>
              <p>{element.title}</p>
              <p className='product-price'>{formatPrice(element.price)}</p>
              <button
                onClick={(e) =>
                  onAddToCart({
                    id: element.id,
                    title: element.title,
                    price: element.price,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
            <i
              className='product-desctiption'
              onMouseOver={(e) => onProductDesctiptionShow(e, index)}
              onMouseLeave={(e) => onProductDesctiptionHide(e, index)}
            />
            {isHovering[index] && (
              <div className='product-description-content'>
                <img
                  className='product-image'
                  src={element.img}
                  alt={element.title}
                />
                <div className='product-features'>
                  <h4>Description</h4>
                  <p>{element.description}</p>
                  <h4>Key Features</h4>
                  <p>{element.features[0].lines}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

const Products = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/products`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  //if (error) return `Error: ${error.message}`;
  //if (!post) return 'No post!';

  return (
    <main>
      <h1>Fingertips Store</h1>
      <div className='product-box'>
        {!error && post && <ContentBuild htmlContent={post} />}
        {(error || !post) && (
          <div className='error'>{error?.message || noNetworkError}</div>
        )}
      </div>
    </main>
  );
};

export default Products;
