import { dbProjects } from '../data/dbProjects';

import Thumbnail from './thumbnail'

export default function Gallery({ typeGallery }) {

  const foundGallery = typeGallery === 'todo' ? dbProjects : dbProjects.filter(projects => projects.area == typeGallery);


  return (

    <div className="gallery">
      {
        foundGallery.map(project => (
          <Thumbnail
            key={project.id}
            img={project.thumbnail}
            area={project.area}
            name={project.name}
          />
        ))
      }
    </div>
  )
}
