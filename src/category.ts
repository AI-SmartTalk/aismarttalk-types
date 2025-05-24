import { z } from "zod";

/**
 * Creates a color options array for category color selection
 * @returns Array of color objects with name and value
 */
export const getCategoryColorOptions = () => [
    { name: "Blue", value: "blue.500" },
    { name: "Teal", value: "teal.500" },
    { name: "Green", value: "green.500" },
    { name: "Purple", value: "purple.500" },
    { name: "Pink", value: "pink.500" },
    { name: "Red", value: "red.500" },
    { name: "Orange", value: "orange.500" },
    { name: "Yellow", value: "yellow.500" },
    { name: "Gray", value: "gray.500" },
]; 

export enum ColorValue {
    BLUE = "blue.500",
    TEAL = "teal.500",
    GREEN = "green.500",
    PURPLE = "purple.500",
    PINK = "pink.500",
    RED = "red.500",
    ORANGE = "orange.500",
    YELLOW = "yellow.500",
    GRAY = "gray.500"
}

export enum CategoryType {
    KNOWLEDGE = "KNOWLEDGE",
    WORKFLOW = "WORKFLOW"
}

// Define the enum first for better type safety
export const CategoryTypeEnum = z.enum(["KNOWLEDGE", "WORKFLOW"]);

export const categoryCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional().nullable().default(null),
  color: z.enum(
    getCategoryColorOptions().map((option) => option.value) as [
      string,
      ...string[]
    ]
  ),
  parentId: z.string().optional().nullable().default(null),
  type: z
    .array(CategoryTypeEnum)
    .min(1, "At least one category type is required"),
});

export const categoryUpdateSchema = categoryCreateSchema.extend({
  categoryId: z.string(),
});

export interface MinimalCategory {
    id: string;
    name: string;
    description: string | null;
    color: ColorValue;
    parentId: string | null;
    type: CategoryType[];
}

export interface CategoryWithChildren extends MinimalCategory {
    children: MinimalCategory[];
}

export interface CreateCategory {
    name: string;
    description: string | null;
    color: ColorValue;
    parentId: string | null;
    type: CategoryType[];
}

export interface UpdateCategory extends CreateCategory {
    categoryId: string;
} 