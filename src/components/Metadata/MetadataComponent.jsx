import React from 'react';
import MetaTags from "react-meta-tags/dist/react-meta-tags.es";
import shortid from 'shortid';

const Metadata = ({metadata}) => {
  return (
    <MetaTags>
      {metadata.map(pageMetadata =>
        pageMetadata.name.includes('og:')
          ? <meta
              property={pageMetadata.name}
              content={pageMetadata.keyword}
              key={shortid.generate()}
            />
          : <meta
              name={pageMetadata.name}
              content={pageMetadata.keyword}
              key={shortid.generate()}
            />
      )}
    </MetaTags>
  )
}

export default Metadata;
