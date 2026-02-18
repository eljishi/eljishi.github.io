import { Component } from '@angular/core';
import { LucideAngularModule,ExternalLink,Code2, FileCode, Palette, Layers, 
  Server, Terminal, Database, DatabaseBackup,
  GitBranch, Wrench, Figma, Cloud , Linkedin, Mail, 
  Github,
  MapPin,
  Phone} from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
readonly ExternalLink = ExternalLink;

readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Code2 = Code2;
  readonly FileCode = FileCode;
  readonly Palette = Palette;
  readonly Layers = Layers;
  readonly Server = Server;
  readonly Terminal = Terminal;
  readonly Database = Database;
  readonly DatabaseBackup = DatabaseBackup;
  readonly GitBranch = GitBranch;
  readonly Wrench = Wrench;
  readonly Figma = Figma;
  readonly Cloud = Cloud;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
}

