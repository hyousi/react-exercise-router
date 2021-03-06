import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Product() {
  const { name } = useParams();
  const [content, setContent] = useState({});
  useEffect(() => {
    const url = `http://localhost:3000/products?name=${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setContent(data[0]));
  }, []);

  return (
    <>
      <p>
        <strong>Product Details:</strong>
      </p>
      <div>
        {content
          ? Object.entries(content).map(([key, val], index) => (
              <div className="detail" key={index}>
                {key}: {val}
              </div>
            ))
          : '404 Not Found This Product'}
      </div>
    </>
  );
}
