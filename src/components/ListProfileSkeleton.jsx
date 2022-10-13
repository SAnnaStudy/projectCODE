import React from "react"
import ContentLoader from "react-content-loader"

const ListProfileSkeleton = (props) => (
    <ContentLoader 
    speed={3}
    width={900}
    height={80}
    viewBox="130 -22 210 80"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="65" y="11" rx="5" ry="5" width="144" height="13" /> 
    <rect x="67" y="33" rx="5" ry="5" width="80" height="9" /> 
    <circle cx="27" cy="27" r="27" />
  </ContentLoader>
)

export default ListProfileSkeleton