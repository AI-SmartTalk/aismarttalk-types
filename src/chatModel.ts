import { z } from "zod";

export interface ChatModelPublic {
    id: string;
    name: string;
    configurations: Configuration[];
  }
  
  export interface Configuration {
    responseBiography: string | null;
    decisionBiography: string | null;
    configurationType: ConfigurationType;
    defaultTools: DefaultTool[];
  }
  
  export enum ConfigurationType {
    CHAT_CONNECTED_USER = "CHAT_CONNECTED_USER",
    CHAT_ANONYMOUS = "CHAT_ANONYMOUS", 
    SMART_ADMIN = "SMART_ADMIN"
  }
  
  export enum DefaultTool {
    SEARCH_FAQ = "SEARCH_FAQ",
    SEARCH_DOCUMENT = "SEARCH_DOCUMENT",
    SEARCH_ARTICLE = "SEARCH_ARTICLE",
    SEARCH_PRODUCT = "SEARCH_PRODUCT",
  }
  
  export const UpdateChatModelConfigurationSchema = z.object({
    responseBiography: z.string().nullable(),
    decisionBiography: z.string().nullable(),
    configurationType: z.nativeEnum(ConfigurationType),
    defaultTools: z.array(z.nativeEnum(DefaultTool)),
  });
  