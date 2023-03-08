import React from "react";

export default function Footer() {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>sudo bash footer.sh</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>
            Built With ♡ By Hosenur
          </code>
        </pre>
        <pre data-prefix=">" className="text-info">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
}


