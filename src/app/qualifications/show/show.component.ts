import { Component, OnInit } from '@angular/core';
/* Importar Modelo */
import { Post } from 'src/app/post.model';
/* Importar Servicio */
import { PostService } from 'src/app/post.service';
PostService

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  Posts: Post[]
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res) => {
      this.Posts = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });
    });
  }

  deleteRow= (post) => {
    this.postService.deletePost(post);
  }
}
