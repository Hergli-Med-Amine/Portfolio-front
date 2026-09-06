import type { PortfolioProject } from '../models/project.model';
import autoteamSinotruk from './Autoteam-Sinotruk/data.json';
import bydLocalSite from './BYD-Local-Site/data.json';
import lsatPhoneTech from './LSAT-PhoneTech/data.json';

/**
 * Data bundler.
 *
 * Each project lives in its own folder under `src/app/data/<Project>/`
 * with a `data.json` file and an `images/` directory. This module imports
 * those JSON files at build time so the data ships inside the JS bundle —
 * no runtime JSON fetch, no loading states, no 404 risk.
 *
 * To add a project: drop a folder with `data.json` next to the others and
 * register its import below.
 */
export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  bydLocalSite as PortfolioProject,
  autoteamSinotruk as PortfolioProject,
  lsatPhoneTech as PortfolioProject,

];
