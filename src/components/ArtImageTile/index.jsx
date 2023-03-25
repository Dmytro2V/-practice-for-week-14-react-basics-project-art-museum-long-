import {useParams} from 'react-router-dom';
function ArtImageTile({galleries}) {
    //console.log(galleries);
    const {galleryId} = useParams();
    const gallery = galleries.find(gal => gal.gallerynumber===galleryId)
    //console.log('gid', galleryId);
    return(
    <h2>FirstImage:
        gallery.images[0]
        {/* {galleries.find(gal => gal.gallerynumber===galleryId).name}*/}
    </h2>
    
    )
}
export default ArtImageTile;