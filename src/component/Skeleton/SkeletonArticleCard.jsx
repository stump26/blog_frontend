import React from 'react';
import { Card, CardContent } from '@material-ui/core';

import './SkeletonArticleCard.scss';

const SkeletonArticleCard = () => {
  return (
    <Card
      className="Article-card Article-card-skeleton"
    >
      <CardContent>
        <div className="Article-card-head">
          <div className="Article-title-skeleton" variant="h4">
            {" "}
          </div>
          <hr className="Article-divide" />
          <div className="Article-date-skeleton">{"  "}</div>
        </div>
        <p className="Article-desc-skeleton">
          <div>{"   "}</div>
          <div>{"   "}</div>
          <div>{"   "}</div>
        </p>

        <div className="Article-Tag-list">
          <div className="Article-tag-item-skeleton">
            {"  "}
          </div>
          <div className="Article-tag-item-skeleton">
            {"  "}
          </div>
          <div className="Article-tag-item-skeleton">
            {"  "}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default React.memo(SkeletonArticleCard);
