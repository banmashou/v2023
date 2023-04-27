/**
 * @description: Vite Environment Variables and Vite import.meta.env Types
 * @author: 斑马兽
 * @interface ViteEnv
 */
interface ViteEnv {
  VITE_ROUTER_AUTOLOAD: boolean
  VITE_API_URL: string
  VITE_HOST: string
  VITE_PORT: number
}

interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
