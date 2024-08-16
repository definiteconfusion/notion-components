/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Link, Image, Vstack, Hstack, Header1, Header2, Header3, Header4, Header5, Header6, Itag, Card } from 'notion-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <Vstack
          control="start"
          padding="1rem"
        >
          <Header1
            mode="dark"
          >
            Products</Header1>
          <Hstack
            control="center"
            padding="1rem"
          >
            <Card
            mode="dark"
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCc23ls9cAiMp6x7q618RMGa-9GcV_Nkc6g&s"
              title="Tropical Hi-Chew"
              price="4.99"
              currency="£"
              unit="per pack"
              buttonTitle="Add to Cart"
              buttonOnClick={() => console.log('Button Clicked')}
            >  
              <Itag 
                  mode="affirmative"
                  title="New"
              />
            </Card>
            <Card
            mode="dark"
              icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCc23ls9cAiMp6x7q618RMGa-9GcV_Nkc6g&s"
              title="Tropical Hi-Chew"
              price="4.99"
              currency="£"
              unit="per pack"
              buttonTitle="Add to Cart"
              buttonOnClick={() => console.log('Button Clicked')}
            >  
              <Itag 
                  mode="constructive"
                  title="New"
              />
            </Card>
          </Hstack>
        </Vstack>
  </React.StrictMode>
);
