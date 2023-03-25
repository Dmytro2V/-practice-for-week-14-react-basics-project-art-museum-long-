import {useParams} from 'react-router-dom';
function GalleryView({galleries}) {
    console.log(galleries);
    const {galleryId} = useParams(); 
    //console.log('gid', galleryId);
    return(
    <h2>Gallery: {galleries.find(gal => gal.gallerynumber===galleryId).name}
    </h2>
    
    )
}
export default GalleryView;