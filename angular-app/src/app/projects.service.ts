import { Injectable } from '@angular/core';
import { PROJECTS_DATA } from './projects-data';
import { Project } from './models/project.model';

export type { Project };

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    private projects: Project[] = PROJECTS_DATA;

    getProjects(): Project[] {
        return this.projects;
    }

    getProjectById(id: number): Project | undefined {
        return this.projects.find(p => p.id === id);
    }

    getRelatedProjects(category: string, currentId: number): Project[] {
        return this.projects
            .filter(p => p.category === category && p.id !== currentId)
            .slice(0, 3);
    }
}
