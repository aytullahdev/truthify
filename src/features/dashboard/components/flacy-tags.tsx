interface FallacyTag {
  name: string;
}

interface FallacyTagsProps {
  fallacies: FallacyTag[];
}

export function FallacyTags({ fallacies }: FallacyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {fallacies.map((fallacy, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
        >
          {fallacy.name}
        </span>
      ))}
    </div>
  );
}
